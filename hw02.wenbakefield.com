server {
        listen 80;
        listen [::]:80;

        root /home/wenbakefield/www/hw02.wenbakefield.com;

        index hw02.html;

        server_name hw02.wenbakefield.com;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
