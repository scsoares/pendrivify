# Pendrivify

Pendrivify creates a downloadable personalized chart of your most listened Spotify songs. It's aimed at brazilian users and it's inspired by USB drives pre-loaded with songs that are usually sold on latin american flea markets. You can read more about them [here](https://www.vice.com/es/article/nezavw/pirateria-digital-usb-musica-san-andresito).

If you prefer, read this documentation in <a href="https://github.com/scsoares/pendrivify/blob/master/README-pt.md">brazilian portuguese</a> ![brazil](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/br.png)

### Prerequisites:

Google Chrome or any other browser installed, Python3 installed and a Spotify account.

### Instructions:

1. ```
   git clone https://github.com/scsoares/pendrivify
   ```

   or download this repo as a [ZIP file](https://github.com/scsoares/pendrivify/archive/master.zip).

2. Unzip the file and you should have a folder named `pendrivify-main`.

3. Go to your [Spotify for Developers Dashboard](https://developer.spotify.com/dashboard/) and create your application. I registered this Redirect URI, so do it as well (you may use a different port, but keep the /redirect):

- http://localhost:5000/redirect

4. Once you have created your app, load your CLIENT_ID, CLIENT_SECRET and generate a random SECRET_KEY in the credentials.py file.

5. In order to run the app, open the `pendrivify-main` folder and type on the terminal:

```
pip install -r requirements.txt
Flask run
```

6. Then, open `http://localhost:5000` or your chosen port in a browser.

## Built With

`HTML` `CSS` `JavaScript` `Flask`

## Authors

- **Sarah Soares** - _Initial work_ - [scsoares](https://github.com/scsoares)

## Version History

- 1.0.0 BETA
  - Initial release

## Contributing

If you have any suggestions for improvement, feel free to [contact me](mailto:sasodsgn@gmail.com) or solicit a pull request! 🙂

## Acknowledgments

- Inspiration: [Receiptify](https://receiptify.herokuapp.com/) by [Michelle Liu](https://github.com/michellexliu) and [Receiptify-flask](https://github.com/eriktoor/receiptify-flask)
