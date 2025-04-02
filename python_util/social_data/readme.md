# Tumblr

1. download Tumblr data
2. Extract media and posts from zip
3. Prompt ChatGPT to make a Python script to convert to a CSV. Data comes as a set of HTML files. Old School. *
4. pip install beautifulsoup4
5. Debug AND...
6. `python3 python3 tumblr_to_csv.py`
7. Exploring the data...
   1. There was a transition to Instagram over time...
   2. As on Jan 1, 2015 looks like intermittent posts directly on Tumblr, adn some pulled in from IG? 
   3. Pretty much just posting on IG as of 2015-02-25
   4. Want to look for rows that have an imageURL like this: `media/72621788371.jpg` **NOT** `media/` with nothing afterwards, which imp[lies importing the image from IFTT or Instagram directly
   5. OK, earlier than 2015 with a real imageURL is a good starting point
  






--------




*Prompt

  lets write python to get and format all the data from my tumblr data download and INTO a csv file.

  Ultimately, will want to add to postgres database in my art_portfolio project with NextJS and Prisma with this schema

  model Artwork {
    id          Int        @id @default(autoincrement())
    title       String
    size        String
    year        Int
    date        DateTime?
    description String?
    etsyUrl     String?
    imageUrl    String
    type        ArtworkType
    source      SourceType
    order       Int?      // Use to specify image order on portfolio pages
    seriesId    Int?      // Foreign key to Series
    series      Series?   @relation(fields: [seriesId], references: [id])
    mediums     Medium[]  @relation("ArtworkMedium")
    tags        Tag[]     @relation("ArtworkTag")
  }

  Of all this data, lets aim to get the following from the Tumblr Data on each html page:

  description & title: contents from <div class="caption"><p>Guggenheim</p> </div> SO -> "Guggenheim"
  date: from timestamp <span id="timestamp"> May 1st, 2013 1:20pm </span>
  year: extract from timestamp
  imageUrl: grab from <img src="../../media/49369008088.jpg"/> and keep as "49369008088.jpg"
  tags: make an array of all the tags, lowercase. <span class="tag">Guggenheim</span>
                                            <span class="tag">museum</span>
                                            <span class="tag">sketch</span>
                                            <span class="tag">drawing</span>
                                                      </div>

  Boilerplate for all:
  series: Drawing-a-Day
  source: tumblr
  etsyUrl: null 
  type: NLBS
  mediums: sketchbook, pen
  size: `5.25" x 8"`
  order: null







  It is in a social_data/tumblr/tumblr_data folder

  /media -> has all the jpg images. 
  example: python_util/social_data/tumblr/tumblr_data/media/49369008088.jpg

  python_util/social_data/tumblr/tumblr_data/posts
  has a /html folder
  also, a posts_index.html
  That can be our guide.
  Lets iterate through each html page linked from here.

  here are the first few lines of posts_index.html


  <!doctype html><html><body><div class='post_link' id='723087073709604864'>Post: <a href='html/723087073709604864.html' target='_blank'>723087073709604864</a></div><div class='post_link' id='723087036997877760'>Post: <a href='html/723087036997877760.html' target='_blank'>723087036997877760</a></div><div class='post_link' id='723087009247313920'>Post: <a href='html/723087009247313920.html' target='_blank'>723087009247313920</a></div><div class='post_link' id='723086982145884160'>Post: <a href='html/723086982145884160.html' target='_blank'>723086982145884160</a></div><div class='post_link' id='723086942613422080'>Post: <a href='html/723086942613422080.html' target='_blank'>723086942613422080</a></div><div class='post_link' id='723086912944062464'>Post: <a href='html/723086912944062464.html' target='_blank'>723086912944062464</a></div><div class='post_link' id='723086873464045568'>Post: <a href='html/723086873464045568.html' target='_blank'>723086873464045568</a></div><div class='post_link' id='722463049458565120'>Post: <a href='html/722463049458565120.html' target='_blank'>722463049458565120</a></div><div class='post_link' id='722463016321466368'>Post: <a href='html/722463016321466368.html' target='_blank'>722463016321466368</a></div><div class='post_link' id='722462979836248064'>Post: <a href='html/722462979836248064.html' target='_blank'>722462979836248064</a></div><div class='post_link' id='722462937744359424'>Post: <a href='html/722462937744359424.html' target='_blank'>722462937744359424</a></div><div class='post_link' id='722462887986249728'>Post: <a href='html/722462887986249728.html' 



  HERE IS AN EXAMPLE OF ONE OF THE HTML FILES
  python_util/social_data/tumblr/tumblr_data/posts/html/49369008088.html

          <!DOCTYPE HTML>
          <html>
              <head>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                  <link rel="stylesheet" type="text/css" href="../style.css"/>
              </head>
              <body>
                  
                  
                  
                                                                                          <img src="../../media/49369008088.jpg"/>
                                                                                            <div class="caption"><p>Guggenheim</p> </div>
                                      
                  
                  
                  
                  
                                  <div id="footer">
                  <span id="timestamp"> May 1st, 2013 1:20pm </span>
                                                            <span class="tag">Guggenheim</span>
                                            <span class="tag">museum</span>
                                            <span class="tag">sketch</span>
                                            <span class="tag">drawing</span>
                                                      </div>
              </body>
          </html>

