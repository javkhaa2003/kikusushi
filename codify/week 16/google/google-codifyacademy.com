<!DOTYPE HTML>
  <html lang="en">
  <head>
  <!--including the Favorite Icon -->
  <link role="shortcut icon" href="favicon.ico">
  <!--computer Character Set - Not to Important-->
  <meta charset="UTF-8">
  <!--Descrition of the Website -->
  <meta name="description" content="Codify Academ's Google Replication">
  <!--Keyword for Document -->
  <meta name="keywors" content ="Codify Academy, Google Replication">
  <!--Author of Document-->
  <meta name="author" content="Chris Brody @ codify Acamedy".
  <!-- Title -->
  <title>Google Replica</title>
  <!-- Font Awesome -->
  <script src="https://use.fontawesome.com?9a77ea3aef.js"></script>
  <!--Author Custom CSS -->
  <link rel="stylesheet" href="css/main.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <!--Top Section -Navigation -->
  <ul class="top navigation">
    <li>
      <a href="Https://www.google.com/">+Chris</a>
    </li>
    <li>
      <a href="https://mail.google.com/mail/?tab=wm">Mail</a>
      <li/>
      <Li>
        <a href="https://www.google.com/imghp?hl=en&tab=wi&ei=jtezVc6XNcq2ed_doeAL&ved=0CBQQqi4oAQ">Image</a>
      </li>
      <li>
        <div class="fa fa-th"></div>
      </li>
      <li>
        <div class="fa fa-bell-o"></div>
      </li>
      <li>
      <span class="share-button">Share</span>
    </Li>
    <li>
      <img class="profile-img" src="img/chris3.jpg">
    </li>
  </ul>
  <!--Middle Section - Search Box -->
  <div class="search box">
    <image src="img/google.png">
      <input type="text" autofocus placeholder="Search Google or type a URL">
      <div class="search-buttons">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </div>
      <!-- Bottom Section - Site Link -->
      <div class="Bottom-site-link">
        <!--Bottm Left Link -->
        <ul class="left-site-link">
          <li>
            <a href="https://www.goole.com/intl/en/ads/?fg=1">advertising</a>
          </li>
          <li>
            <a href="https://www.google.com/services/?fg=1">Business</a>
          </li>
            <li>
              <a href="https://www.google.com/intl/en/about.html?fg=1">About</a>
          </li>
        </ul>
        <!-- Bottom Right Link -->
        <ul class="right-site-link">
          <li>
            <a href="https://www.google.com/intl/en/policies/privacy/?fg=1">Privacy</a>
          </li>
          <li>
            <a href="https://www.google.com/intl/en/policies/terms/?fg=1">Terms</a>
          </li>
          <li>
          <a href="https://www.google.com/preferences?hl=en">Settings</a>
        </li>
      </ul>
    </div>
  </body>
  </html>
