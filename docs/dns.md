# DNS (Namecheap)

The apex domain `workspace.sh` is registered at Namecheap and points at
GitHub Pages. `public/CNAME` (committed) tells GitHub Pages which custom
domain to keep configured across deploys; the DNS records below tell the
world to send traffic to GitHub.

## Records

In **Namecheap → Domain List → workspace.sh → Advanced DNS**, set:

| Type  | Host | Value                       | TTL       |
| :---- | :--- | :-------------------------- | :-------- |
| A     | @    | 185.199.108.153             | Automatic |
| A     | @    | 185.199.109.153             | Automatic |
| A     | @    | 185.199.110.153             | Automatic |
| A     | @    | 185.199.111.153             | Automatic |
| CNAME | www  | `<github-user>.github.io.`  | Automatic |

Optional IPv6 (recommended), four AAAA records on `@`:

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**Remove any default records Namecheap added** — in particular the
*URL Redirect* on `@` to a parking page, and any `CNAME` on `@` to
`parkingpage.namecheap.com`. They'll silently override the A records.

## Verifying

```sh
dig workspace.sh +short          # expect the four 185.199.* IPs
dig www.workspace.sh +short      # expect <user>.github.io. then IPs
curl -I https://workspace.sh     # expect 200 once HTTPS is provisioned
```

Propagation is usually minutes but can take up to an hour. HTTPS
provisioning (Let's Encrypt via GitHub) happens automatically once
GitHub sees the correct A records — until then **Enforce HTTPS** in
Pages settings will be greyed out.

## References

- [GitHub Pages: apex domain DNS docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
