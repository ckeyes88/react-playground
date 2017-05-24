import { createPortal } from 'portals';

const http = createPortal({
  globals: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});

export default http;