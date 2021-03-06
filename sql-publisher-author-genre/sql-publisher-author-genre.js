var Schemas = {
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice.
/*
PUBLISHER AND AUTHOR HAS A MANY TO MANY RELATIONSHIP BECAUSE THE PUBLISHER HAS MANY AUTHORS
AND THE AUTHORS HAVE MANY PUBLISHER SO WE NEED A NEW TABLE (Publisher_Author) WHICH IS A JOINT TABLE THAT
HOLD THE ID OF THE PUBLISHER AND THE ID OF THE AUTHOR AND AN ID OF IT'S OWN.
*/

var sqlPublisherGenreSchema = Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice.
/* 
PUBLISHER AND THE GENRE HAS A MANY TO ONE RELATIONSHIP (BECAUSE OF THE ORDER) BECAUSE THE GENRE HAS MANY PUBLISHERS BUT
THE PUBLISHER HAS ONLY ONE GENRE SO THE PUBLISHER TABLE MUST CONTAIN AN ID OF THE GENRE.
*/

var sqlAuthorGenreSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice.
/*
AUTHOR AND GENRE HAS A MANY TO MANY RELATIONSHIP BECAUSE THE AUTHOR HAS MANY GENRES AND THE GENRE HAS MANY AUTHORS
SO WE NEED A JOINT TABLE (Author_Genre) CONTAINING THE ID OF THe GENRE AND THE ID OF THE AUTHOR.
*/
