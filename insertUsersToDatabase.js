const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const userSchema = new Schema({
    name: {
      type: String,
    },
    rocketId: {
      type: String,
    },
    username: {
      type: String,
    },
    customFields: {
      type: String,
    },
    step: {
      type: String,
    },
    steps: {
      surveyBot: String,
      sootybot: String,
      trainingbot: String,
      KBBot: String,
      EjabiBot: String,
      strict: false,
    },
    type: {
      type: String,
    },
    email: {
      type: String,
    },
    profile_pic: {
      type: String,
    },
    tickets: ['Mixed'],
    activeTicket: {
      name: String,
      description: String,
      index: Number,
    },
    // surveys: {
    //   done: [surveySchema],
    //   pending: [surveySchema],
    // },
    badges:
      [{
        badge_id: {
          type: ObjectId,
          ref: 'Badges',
        },
        expire_date: Date,
        created_at: {
          type: Date,
          default: Date.now(),
        },
        default: [],
      }],
    // polls: [pollsSchema],
    // courses: [coursesSchema],
    postive: { type: Number, default: 0 },
    negtive: { type: Number, default: 0 },
    // delegation_requests: [delegationRequestSchema],
    certificates: [{
      certificate_id: {
        type: ObjectId,
        ref: 'Certificate',
      },
      issued_date: String,
      expiry_date: String,
      score: Number,
    }],
    // user_data: {
    //   type: {
    //     ar: {
    //       type: userProfile,
    //     },
    //     en: {
    //       type: userProfile,
    //     },
    //   },
    // },
    mobile_number: {
      type: String,
    },
    training_cost: {
      type: String,
    },
    training_cost_per_employee: {
      type: String,
    },
    total_training_days: {
      type: String,
    },
    average_headcount: {
      type: String,
    },
    total_training_hours: {
      type: String,
    },
    training_hours_per_employee: {
      type: String,
    },
    number_of_places: {
      type: String,
    },
    number_of_classes: {
      type: String,
    },
    successful_training_hours: {
      type: String,
    },
    successful_attendance: {
      type: String,
    },
    training_class_cost: {
      type: String,
    },
    number_of_qualifications: {
      type: String,
    },
    last_organization_transfer_date: {
      type: String,
    },
    last_job_transfer_date: {
      type: String,
    },
    total_enrolled_employees: {
      type: String,
    },
    assignment_id: {
      type: String,
    },
    qualification_rank: {
      type: String,
    },
    last_performance_rating: {
      type: String,
    },
    performance_rating: {
      type: String,
    },
    employee_number: {
      type: String,
    },
    grade_band: {
      type: String,
    },
    length_of_service: {
      type: String,
    },
    grade_promotion: {
      type: String,
    },
    age_band: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    articles: {
      read: [{
        type: ObjectId,
        ref: 'Articles',
      }],
      reading: [{
        reading_article_id: {
          type: ObjectId,
          ref: 'Articles',
        },
        position: {
          type: String,
          default: '0',
        },
        reading_dates: [{
          type: Date,
          default: Date.now(),
        }],
      }],
      liked: [{
        type: ObjectId,
        ref: 'Articles',
      }],
      disliked: [{
        type: ObjectId,
        ref: 'Articles',
      }],
      favourites: [{
        type: ObjectId,
        ref: 'Articles',
      }],
      pinned: [{
        type: ObjectId,
        ref: 'Articles',
      }],
      published: [{
        type: ObjectId,
        ref: 'Articles',
      }],
      modified: [{
        modified_article: {
          type: ObjectId,
          ref: 'Articles',
        },
        modified_date: {
          type: Date,
          default: Date.now(),
        },
      }],
      comments: [{
        type: ObjectId,
        ref: 'Articles',
      }],
      articles_shared_with_others: [{
        articleId: {
          type: ObjectId,
          ref: 'Articles',
        },
        userId: {
          type: ObjectId,
          ref: 'User',
        },
      }],
      articles_others_shared_with_me: [{
        articleId: {
          type: ObjectId,
          ref: 'Articles',
        },
        userId: {
          type: ObjectId,
          ref: 'User',
        },
        note: {
          type: String,
        },
        date: {
          type: Date,
        },
      }],
    },
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
var userModel = mongoose.model('users', userSchema);

for (let x=0; x<10000; x++) {
  const char = new userModel({
        "surveys" : {
            "done" : [ ],
            "pending" : [ ]
        },
        "tickets" : [ ],
        "postive" : 0,
        "negtive" : 0,
        "name" : "adel",
        "rocketId" : "djJzrfgkz9hWrDtSd",
        "username" : "adel",
        "email" : "adel@gmail.com",
        "badges" : [ ],
        "polls" : [ ],
        "courses" : [ ],
        "delegation_requests" : [ ],
        "certificates" : [ ],
        "createdAt" : Date.now(),
        "updatedAt" : Date.now(),
  });
  char.save(function (err, char) {
    if (err) {
      console.log(err);
    } else {
      console.log("Document "+ x +" Save Done");
    }
  });
}

