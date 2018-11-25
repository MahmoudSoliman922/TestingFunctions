const fs = require('fs');
const pdfParser = require('pdf-text-parser');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const articlesSchema = new Schema({
  title: String,
  author: String,
  image: String,
  published_date: {
    type: Date,
    default: Date.now(),
  },
  currentContent: String,
  originalContent: String,
  description: String,
  tag: String,
  article_type: {
    type: String,
    enum: ['created', 'uploaded'],
  },
  has_file: {
    type: Boolean,
    default: false,
  },
  file_data: {
    file_name: String,
    file_type: {
      type: String,
      enum: ['pdf', 'doc'],
    },
  },
  publishing_data: {
    published_by: {
      type: ObjectId,
      ref: 'User',
    },
    publishing_status: [{
      status: {
        type: String,
        enum: ['approved', 'rejected', 'under review', 'unseen'],
        default: 'unseen',
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    }],
    publishing_active_state: {
      type: String,
      enum: ['approved', 'rejected', 'under review', 'unseen'],
    },
    publishing_note: String,
  },
  modification_data: [{
    modification_by: {
      type: ObjectId,
      ref: 'User',
    },
    modification_content: String,
    modification_date: {
      type: Date,
      default: Date.now(),
    },
    modification_status: [{
      status: {
        type: String,
        enum: ['approved', 'rejected', 'under review', 'unseen'],
        default: 'unseen',
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    }],
    modification_note: String,
    modification_active_state: {
      type: String,
      enum: ['approved', 'rejected', 'under review', 'unseen'],
    },
  },
  ],
  liked: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
      },
      liked_date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  disliked: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
      },
      disliked_date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  favourites: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
      },
      favourite_date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  pinned: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
      },
      pinned_date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  read: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
      },
      read_date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  reading: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
      },
      reading_date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  comments: [
    {
      userId: {
        type: ObjectId,
        ref: 'User',
      },
      comment_content: String,
      comment_date: Date,
    },
  ],
  share: [
    {
      shared_by: {
        type: ObjectId,
        ref: 'User',
      },
      shared_to: {
        type: ObjectId,
        ref: 'User',
      },
      share_date: Date,
    },
  ],
});

var con;
var cb = function (err) {
  if (!err)
    console.log("Connection Opened");
  else
    console.log("Connection Opened Failed");
};
mongoose.connect("mongodb://localhost/v1", cb);
con = mongoose.connection;
var articlesModel = mongoose.model('articles', articlesSchema);

let alltext_before;
let alltext_after;
const pdfData = fs.readFileSync('./book.pdf');
pdfParser(pdfData).then(parsedText => {
    parsedText.pages.forEach(element => {
      alltext_before = alltext_before + element;
      alltext_after = alltext_before.replace(/,/g, "");  
    });
  }).then(function(){
    for (let x=0; x<2000; x++) {
        const char = new articlesModel({
          "publishing_data": {
            "publishing_active_state": "approved",
          },
          "published_date": "2018-11-21T11:59:39.120+02:00",
          "has_file": false,
          "title": "Testing Title",
          "author": "Testing author",
          "image": "imageTest.jpg",
          currentContent: alltext_after,
          originalContent: alltext_after,
          "description": "Test Word Doc\n\nThis is a test word doc created with Word 97",
          "modification_data": [],
          "liked": [{}, {}, {}, {}],
          "disliked": [],
          "favourites": [],
          "pinned": [],
          "read": [],
          "reading": [{}, {}, {}, {}],
          "comments": [],
          "share": [],
        });
        char.save(function (err, char) {
          if (err) {
            console.log(err);
          } else {
            console.log("Document "+ x +" Save Done");
          }
        });
      }
  });
