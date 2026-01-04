# Cloudflare Server Locations

In case you have a three letter code (e.g., from the `colo` field of `/cdn-cgi/trace`) and want to know which server location it belongs to, here is a list of Cloudflare's server locations, no additional network requests needed.

## Usage

```typescript
import { CloudflareServerLocations } from 'cloudflare-server-locations'

console.log(CloudflareServerLocations['LAX']) // Los Angeles, CA, United States
```