﻿using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EWM.Xrm.SharePoint
{
    public class DocumentLocationHelper
    {
        private IOrganizationService _crmService;
        private ISharePointService _spService;

        public DocumentLocationHelper(IOrganizationService service, ISharePointService sharePointService)
        {
            _crmService = service;
            _spService = sharePointService;
        }

        public SharePointDocumentLocation GetOrCreateDocumentLibraryLocation(SharePointSite site, string documentLibraryName, ITracingService tracingService)
        {
            using (var context = new OrganizationServiceContext(_crmService))
            {
                // Get location
                SharePointDocumentLocation docLocation = (from d in context.CreateQuery<SharePointDocumentLocation>()
                                                          where d.ParentSiteOrLocation.Id == site.Id
                                                          && d.Name == documentLibraryName
                                                          select new SharePointDocumentLocation
                                                          {
                                                              Id = d.Id,
                                                              Name = d.Name,
                                                              ParentSiteOrLocation = d.ParentSiteOrLocation,
                                                              RegardingObjectId = d.RegardingObjectId,
                                                              RelativeUrl = d.RelativeUrl
                                                          }).FirstOrDefault();


                if (docLocation == null)
                {
                    // Create if not already
                    docLocation = new SharePointDocumentLocation
                    {
                        Name = documentLibraryName,
                        ParentSiteOrLocation = site.ToEntityReference(),
                        RelativeUrl = documentLibraryName

                    };
                    docLocation.Id = _crmService.Create(docLocation);
                }

                return docLocation;
            }
        }

        public SharePointDocumentLocation GetOrCreateDocumentLibraryLocationByRegardingId(Guid regardingObjectId, string regardingObjectName, string regardingObjectType, Guid ParentSiteOrLocationId)
        {
            using (var context = new OrganizationServiceContext(_crmService))
            {
                // Get location
                SharePointDocumentLocation docLocation = (from d in context.CreateQuery<SharePointDocumentLocation>()
                                                          where d.RegardingObjectId.Id == regardingObjectId
                                                          select new SharePointDocumentLocation
                                                          {
                                                              Id = d.Id,
                                                              Name = d.Name,
                                                              ParentSiteOrLocation = d.ParentSiteOrLocation,
                                                              RegardingObjectId = d.RegardingObjectId,
                                                              RelativeUrl = d.RelativeUrl
                                                          }).FirstOrDefault();

                if (docLocation == null)
                {
                    // Create if not already
                    docLocation = new SharePointDocumentLocation
                    {
                        Name = regardingObjectName,
                        ParentSiteOrLocation = new EntityReference("sharepointdocumentlocation", ParentSiteOrLocationId),
                        RegardingObjectId = new EntityReference(regardingObjectType, regardingObjectId),
                        RelativeUrl = regardingObjectName

                    };
                    docLocation.Id = _crmService.Create(docLocation);
                }

                return docLocation;
            }
        }

        public SharePointDocumentLocation GetOrCreateDocumentLibraryLocationByParentId(Guid parentObjectId, string RelativeUrl)
        {
            using (var context = new OrganizationServiceContext(_crmService))
            {
                // Get location
                SharePointDocumentLocation docLocation = (from d in context.CreateQuery<SharePointDocumentLocation>()
                                                          where d.ParentSiteOrLocation.Id == parentObjectId
                                                          && d.RelativeUrl == RelativeUrl
                                                          select new SharePointDocumentLocation
                                                          {
                                                              Id = d.Id,
                                                              Name = d.Name,
                                                              ParentSiteOrLocation = d.ParentSiteOrLocation,
                                                              RegardingObjectId = d.RegardingObjectId,
                                                              RelativeUrl = d.RelativeUrl
                                                          }).FirstOrDefault();


                if (docLocation == null)
                {
                    // Create if not already
                    docLocation = new SharePointDocumentLocation
                    {
                        Name = "Cedant Programs",
                        ParentSiteOrLocation = new EntityReference("sharepointdocumentlocation", parentObjectId),
                        RelativeUrl = RelativeUrl
                    };
                    docLocation.Id = _crmService.Create(docLocation);
                }

                return docLocation;
            }
        }
        

        public SharePointDocumentLocation CreateDocumentLocation(SharePointSite site, string documentLibraryName, EntityReference regardingRecord, ITracingService tracingService)
        {

            if (regardingRecord != null && string.IsNullOrEmpty(regardingRecord.Name))
                throw new InvalidPluginExecutionException("Document location of regarding record must have a name");

            // Does the document location already exist for this record and site?
            var existingDocumentLocation = this.GetDocumentLocationForRecordBySite(site, regardingRecord);
            if (existingDocumentLocation != null)
                return existingDocumentLocation;


            var parentDocumentLocation = GetOrCreateDocumentLibraryLocation(site, documentLibraryName, tracingService).ToEntityReference();

            // Create document location for folder
            SharePointDocumentLocation docLoc = new SharePointDocumentLocation();
            docLoc.Name = regardingRecord.Name;
            docLoc.RelativeUrl = GetFolderName(regardingRecord);
            docLoc.RegardingObjectId = regardingRecord;
            docLoc.ParentSiteOrLocation = parentDocumentLocation;
            docLoc.Id = _crmService.Create(docLoc);

            var folderPath = GetDocumentLocationPath(docLoc);

            // Create sharepoint folder
            var folderPathString = String.Join("/", folderPath.ToArray().Reverse().Select(a => a.RelativeUrl)) + "/" + docLoc.RelativeUrl;
            _spService.CreateFolder(site.AbsoluteURL, folderPathString);
            docLoc.AbsoluteURL = folderPathString; // Set temporaryily in memory to allow the caller to get the full path
            return docLoc;
        }

        public SharePointDocumentLocation CreateChildDocumentLocation(SharePointSite site, Guid cedantId, string cedantName, Guid programId, string ProgramName)
        {
            // Create CRM Document Location and SharePoint fodler (Account Specific Folder)
            Guid accountDocumentLocationId =  new Guid("EDF99A6A-755D-E511-80FD-C4346BB5981C");
            var cedantDocumentLocationId = GetOrCreateDocumentLibraryLocationByRegardingId(cedantId, cedantName, Account.EntityLogicalName, accountDocumentLocationId);            
            CreateSharePointDocumentLibrary(site, cedantDocumentLocationId);

            // Create CRM Document Location and SharePoint fodler (Fodler for all opportunities for the parent account)
            var cedantProgramsDocumentLocationId = GetOrCreateDocumentLibraryLocationByParentId(cedantDocumentLocationId.Id, Opportunity.EntityLogicalName);
            CreateSharePointDocumentLibrary(site, cedantProgramsDocumentLocationId);

            // Create CRM Document Location and SharePoint fodler (Program Specific Folder)
            var programDocumentLocationId = GetOrCreateDocumentLibraryLocationByRegardingId(programId, ProgramName, Opportunity.EntityLogicalName, cedantProgramsDocumentLocationId.Id);
            CreateSharePointDocumentLibrary(site, programDocumentLocationId);
            
            return programDocumentLocationId;
        }

        private void CreateSharePointDocumentLibrary(SharePointSite site, SharePointDocumentLocation spDocumentLocation)
        {
            var folderPath = GetDocumentLocationPath(spDocumentLocation);

            // Create sharepoint folder
            var folderPathString = String.Join("/", folderPath.ToArray().Reverse().Select(a => a.RelativeUrl)) + "/" + spDocumentLocation.RelativeUrl;

            _spService.CreateFolder(site.AbsoluteURL, folderPathString);
            spDocumentLocation.AbsoluteURL = folderPathString; // Set temporaryily in memory to allow the caller to get the full path
        }

        private string GetDocumentLibraryName(string logicalName)
        {
            return GetFolderName(new EntityReference { Name = logicalName });
        }

        private string GetFolderName(EntityReference record)
        {
            var name = record.Name;
            name = name.TrimStart('_', '.');
            name = name.Replace("~", "").
                Replace("#", "").
                Replace("%", "").
                Replace("&", "").
                Replace("*", "").
                Replace("{", "").
                Replace("}", "").
                Replace(@"\", "").
                Replace(":", "").
                Replace("<", "").
                Replace(">", "").
                Replace("?", "").
                Replace(@"/", "").
                Replace("+", "").
                Replace("|", "").
                Replace(@"""", "");

            if (record.Id != Guid.Empty)
            {
                // We append the Guid just like the out of the box integration to make the name unique
                name = name + "_" + record.Id.ToString("D");
            }
            return name;
        }

        private SharePointDocumentLocation GetDocumentLocationForRecordBySite(SharePointSite site, EntityReference regardingObject)
        {
            var locations = GetDocumentLocationsForRecord(regardingObject);

            // Find which one (if any) is for the requested site
            foreach (var location in locations)
            {
                var path = GetDocumentLocationPath(location);
                if (path != null & path.Count > 0)
                {
                    // check root path
                    var matchesSite = path[path.Count - 1].ParentSiteOrLocation.Id == site.Id;
                    return matchesSite ? location : null;
                }
                else
                    return null;
            }
            return null;
        }
       
        private List<SharePointDocumentLocation> GetDocumentLocationsForRecord(EntityReference regardingObject)
        {
            using (var context = new OrganizationServiceContext(_crmService))
            {
                // Recursively get the sharepoint document locations using parent location/site
                var locations = (from l in context.CreateQuery<SharePointDocumentLocation>()
                                 where l.RegardingObjectId.Id == regardingObject.Id
                                 select new SharePointDocumentLocation
                                 {
                                     Id = l.Id,
                                     Name = l.Name,
                                     RelativeUrl = l.RelativeUrl,
                                     ParentSiteOrLocation = l.ParentSiteOrLocation
                                 }).ToList<SharePointDocumentLocation>();

                return locations;
            }
        }

        private List<SharePointDocumentLocation> GetDocumentLocationPath(SharePointDocumentLocation parentLocation)
        {
            var locations = new List<SharePointDocumentLocation>();

            using (var context = new OrganizationServiceContext(_crmService))
            {
                context.MergeOption = MergeOption.NoTracking;
                SharePointDocumentLocation location = parentLocation;
                EntityReference parent = null;

                do
                {
                    // Recursively get the sharepoint document locations using parent location/site
                    location = (from l in context.CreateQuery<SharePointDocumentLocation>()
                                where l.Id == location.ParentSiteOrLocation.Id
                                select new SharePointDocumentLocation
                                {
                                    Id = l.Id,
                                    Name = l.Name,
                                    RelativeUrl = l.RelativeUrl,
                                    ParentSiteOrLocation = l.ParentSiteOrLocation
                                }).FirstOrDefault();

                    if (location != null)
                        locations.Add(location);

                    parent = (location != null) ? location.ParentSiteOrLocation : null;

                } while (parent != null);
            }

            return locations;
        }
    }
}
