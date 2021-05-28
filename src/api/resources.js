import client from './client';

export const getResources = () => {
  const url =
    '/tripplan/api/v1/routers/lisboa/resources?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,-9.137115&companyZoneIds=545,467,473';
  return client.get(url);
};
