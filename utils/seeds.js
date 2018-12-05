const seeder = require('mongoose-seed');
const moment = require('moment')
const list = [{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" },
{ "geometry": { "coordinates": [-75.16374, 39.95378], "type": "Point" }, "properties": { "addressStreet": "1401 John F. Kennedy Blvd.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19102", "bikesAvailable": 21, "closeTime": "23:58:00", "docksAvailable": 4, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3004, "kioskPublicStatus": "Unavailable", "kioskStatus": "FullService", "name": "Municipal Services Building Plaza", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 30, "trikesAvailable": 0, "kioskConnectionStatus": "Unresponsive", "kioskType": 1, "latitude": 39.95378, "longitude": -75.16374, "hasGeofence": false, "classicBikesAvailable": 21, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }, { "geometry": { "coordinates": [-75.14403, 39.94733], "type": "Point" }, "properties": { "addressStreet": "191 S. 2nd St.", "addressCity": "Philadelphia", "addressState": "PA", "addressZipCode": "19106", "bikesAvailable": 8, "closeTime": "23:58:00", "docksAvailable": 5, "eventEnd": null, "eventStart": null, "isEventBased": false, "isVirtual": false, "isVisible": false, "kioskId": 3005, "kioskPublicStatus": "Active", "kioskStatus": "FullService", "name": "Welcome Park, NPS", "notes": null, "openTime": "00:02:00", "publicText": "", "timeZone": "Eastern Standard Time", "totalDocks": 13, "trikesAvailable": 0, "kioskConnectionStatus": "Active", "kioskType": 1, "latitude": 39.94733, "longitude": -75.14403, "hasGeofence": false, "classicBikesAvailable": 8, "smartBikesAvailable": 0, "electricBikesAvailable": 0 }, "type": "Feature" }]

let date = moment();
let change = false;
list.forEach((e) => {
  e.createdAt = date
  if(change) {
    date = moment(date).add(1, 'days');
    change = false
  } else {
    date = moment(date).add(1, 'hours');
    change = true
  }
})



const data = [
  {
      'model': 'Station',
      'documents': list
  }
];

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/punk_avenue', function() {

  // Load Mongoose models
  seeder.loadModels([
    'src/stations/stationsModel.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['Station'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });

  });
});

