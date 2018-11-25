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

for (let x=0; x<100000; x++) {
  const char = new articlesModel({
    "publishing_data": {
      "publishing_active_state": "approved",
    },
    "published_date": "2018-11-21T11:59:39.120+02:00",
    "has_file": false,
    "title": "Testing Title",
    "author": "Testing author",
    "image": "imageTest.jpg",
    "currentContent": `Beyond IQ , talent, and whatever else has any kind of effect on anything, what most affects your ability to achieve your goals is grit.

    Grit is a combination of passion and perseverance, a belief that failure can be overcome. It’s a willingness to conquer challenges, instead of avoid them.
    
    The only person that can really push you a little bit further in life is yourself.
    
    Grit is both a trait and a skill.
    
    “GRIT is that mix of passion, perseverance, and self-discipline that keeps us moving forward in spite of obstacles” says Daniel Coyle, author of The Little Book of Talent: 52 Tips for Improving Your Skillsby Daniel Coyle.
    
    The good new is, you can cultivate or better still grow your grit. It’s a skill that can be learned and practiced over time.
    
    Grit is associated with perseverance, resilience, ambition, and the need for achievement. It involves maintaining goal focused effort for extended periods of time.
    
    Grit says, “I’ve got this.”
    
    You can develop your capacity for grit. Your response to a challenging situation is more important the obstacle you face.
    
    Ryan Holiday says “obstacle is the way”. And you need grit to push through the obstacle every time you face a challenge.
    
    Dr. Angela Duckworth, author of Grit: The Power of Passion and Perseverance, is the best-known researcher of grit, and she defines Grit as: “working strenuously toward challenges, maintaining effort and interest over years despite failures, adversity, and plateaus in progress.”
    
    Tenacity matters so greatly because, as she explains, “effort counts twice.”
    The emerging science of grit is teaching us a lot about why some people redouble their efforts when the rest of us are heading for the door.
    
    The ability to stick with and pursue a goal over a long period is an important indicator of achieving anything worthwhile in life.
    
    Grit is a better indicator of success than talent. No matter how talented you think you are, if you don’t put in the work, it will amount to nothing.
    
    In Talent is Overrated, Colvin argues that deliberate, methodical, and sustained practice is the way to achieve true mastery.
    
    “Deliberate practice is hard. It hurts. But it works. More of it equals better performance. Tons of it equals great performance.” Colvin writes.
    
    Grit begins with a growth-mindset
    If you strongly believe in the science of human growth in mindset, you have a greater chance of cultivating your grit over time.
    
    That belief alone can give you the perspective you need to stick with something even when the process is difficult.
    
    What can you do in small ways everyday that would make it easy to take the necessary steps to pursue your life-long goals?
    
    Perseverance and resilience have a lot to do with success than you think.
    
    Grit requires sacrifice: embrace the challenge!
    Grit is essential for your success in life, but it is not attractive.
    
    It’s going to get hard, right?
    
    It’s going to be difficult and you are going to want to give up.
    
    And some people, a lot of people, will.
    
    The act of becoming a master at your craft takes a lot of purposeful practice.
    
    You will experience messy frustration. Motivation will ebb and flow, but you can only improve when you commit to constant practice.
    
    You will make tons and tons of mistakes in the process. Making mistakes and failing are normal — in fact, they’re necessary.
    
    Embrace the long repetitive process to get better.
    
    Grit takes time, and many people aren’t giving it. The cost of being the best and pushing towards meaningful work takes a lot of sacrifice.
    
    Many people are not ready for that.
    
    But the whole point here is that, the positive minset needed to get to the long term goal can be developed over time.
    
    You can maintain the effort and interest need to finish hard.
    
    Sometimes you have to let go of something good to grasp something great. The tendency not to abandon tasks in the face of obstacles builds the resilience you need to succeed in life.
    
    Fail forward
    Failure is not fatal. Rejection is also not fatal.
    
    Failure is only a setup for a comeback.
    
    Failure might still sting a little, but when you have grit, it inspires you to want to do better.
    
    Instead of letting boredom be a sign to switch gears, people with grit persevere.
    
    Carrie by Stephen King was rejected 30 times before it was published.
    
    Animal Farm by George Orwell was rejected because there was no market for animal stories in the USA back then.
    
    Harry Potter and the Sorcerer’s Stone was rejected 12 times and J. K. Rowling was told “not to quit her day job.”
    
    Disney was fired from the Kansas City Star in 1919 because, his editor said, he “lacked imagination and had no good ideas.”
    
    Darwin was not enthused on becoming a scientist his whole life, thanks to his dad, who called him lazy and too dreamy.
    
    Darwin once wrote, “I was considered by all my masters and my father, a very ordinary boy, rather below the common standard of intellect.”
    
    So always remember: Be proud of your work. And never quit trying.
    
    Cuttivate your grit and push yourself further outside your comfort bubble. And remember what Ryan Holiday said “The obstacle is the way”.
    
    Dig deeper
    My new course, Thinking in Models is open for enrollment. It’s designed to help you to think clearly, solve problems at multiple levels of depth, and make complex decisions with confidence. Join a community of people on a mission to think clearly, work better, solve problems at multiple levels of depths, and make complex decisions with confidence! Click here for details.
    
    You can also subscribe to Postanly Weekly (my free weekly digest of the best posts about behaviour change that affects your wealth, productivity, and health). Subscribe and get a free copy of my new book, “The Power of One Percent Better: Small Gains, Maximum Results”. Join over 45,000 people on a mission to build a better life.`,
    "originalContent": `Beyond IQ , talent, and whatever else has any kind of effect on anything, what most affects your ability to achieve your goals is grit.

    Grit is a combination of passion and perseverance, a belief that failure can be overcome. It’s a willingness to conquer challenges, instead of avoid them.
    
    The only person that can really push you a little bit further in life is yourself.
    
    Grit is both a trait and a skill.
    
    “GRIT is that mix of passion, perseverance, and self-discipline that keeps us moving forward in spite of obstacles” says Daniel Coyle, author of The Little Book of Talent: 52 Tips for Improving Your Skillsby Daniel Coyle.
    
    The good new is, you can cultivate or better still grow your grit. It’s a skill that can be learned and practiced over time.
    
    Grit is associated with perseverance, resilience, ambition, and the need for achievement. It involves maintaining goal focused effort for extended periods of time.
    
    Grit says, “I’ve got this.”
    
    You can develop your capacity for grit. Your response to a challenging situation is more important the obstacle you face.
    
    Ryan Holiday says “obstacle is the way”. And you need grit to push through the obstacle every time you face a challenge.
    
    Dr. Angela Duckworth, author of Grit: The Power of Passion and Perseverance, is the best-known researcher of grit, and she defines Grit as: “working strenuously toward challenges, maintaining effort and interest over years despite failures, adversity, and plateaus in progress.”
    
    Tenacity matters so greatly because, as she explains, “effort counts twice.”
    The emerging science of grit is teaching us a lot about why some people redouble their efforts when the rest of us are heading for the door.
    
    The ability to stick with and pursue a goal over a long period is an important indicator of achieving anything worthwhile in life.
    
    Grit is a better indicator of success than talent. No matter how talented you think you are, if you don’t put in the work, it will amount to nothing.
    
    In Talent is Overrated, Colvin argues that deliberate, methodical, and sustained practice is the way to achieve true mastery.
    
    “Deliberate practice is hard. It hurts. But it works. More of it equals better performance. Tons of it equals great performance.” Colvin writes.
    
    Grit begins with a growth-mindset
    If you strongly believe in the science of human growth in mindset, you have a greater chance of cultivating your grit over time.
    
    That belief alone can give you the perspective you need to stick with something even when the process is difficult.
    
    What can you do in small ways everyday that would make it easy to take the necessary steps to pursue your life-long goals?
    
    Perseverance and resilience have a lot to do with success than you think.
    
    Grit requires sacrifice: embrace the challenge!
    Grit is essential for your success in life, but it is not attractive.
    
    It’s going to get hard, right?
    
    It’s going to be difficult and you are going to want to give up.
    
    And some people, a lot of people, will.
    
    The act of becoming a master at your craft takes a lot of purposeful practice.
    
    You will experience messy frustration. Motivation will ebb and flow, but you can only improve when you commit to constant practice.
    
    You will make tons and tons of mistakes in the process. Making mistakes and failing are normal — in fact, they’re necessary.
    
    Embrace the long repetitive process to get better.
    
    Grit takes time, and many people aren’t giving it. The cost of being the best and pushing towards meaningful work takes a lot of sacrifice.
    
    Many people are not ready for that.
    
    But the whole point here is that, the positive minset needed to get to the long term goal can be developed over time.
    
    You can maintain the effort and interest need to finish hard.
    
    Sometimes you have to let go of something good to grasp something great. The tendency not to abandon tasks in the face of obstacles builds the resilience you need to succeed in life.
    
    Fail forward
    Failure is not fatal. Rejection is also not fatal.
    
    Failure is only a setup for a comeback.
    
    Failure might still sting a little, but when you have grit, it inspires you to want to do better.
    
    Instead of letting boredom be a sign to switch gears, people with grit persevere.
    
    Carrie by Stephen King was rejected 30 times before it was published.
    
    Animal Farm by George Orwell was rejected because there was no market for animal stories in the USA back then.
    
    Harry Potter and the Sorcerer’s Stone was rejected 12 times and J. K. Rowling was told “not to quit her day job.”
    
    Disney was fired from the Kansas City Star in 1919 because, his editor said, he “lacked imagination and had no good ideas.”
    
    Darwin was not enthused on becoming a scientist his whole life, thanks to his dad, who called him lazy and too dreamy.
    
    Darwin once wrote, “I was considered by all my masters and my father, a very ordinary boy, rather below the common standard of intellect.”
    
    So always remember: Be proud of your work. And never quit trying.
    
    Cuttivate your grit and push yourself further outside your comfort bubble. And remember what Ryan Holiday said “The obstacle is the way”.
    
    Dig deeper
    My new course, Thinking in Models is open for enrollment. It’s designed to help you to think clearly, solve problems at multiple levels of depth, and make complex decisions with confidence. Join a community of people on a mission to think clearly, work better, solve problems at multiple levels of depths, and make complex decisions with confidence! Click here for details.
    
    You can also subscribe to Postanly Weekly (my free weekly digest of the best posts about behaviour change that affects your wealth, productivity, and health). Subscribe and get a free copy of my new book, “The Power of One Percent Better: Small Gains, Maximum Results”. Join over 45,000 people on a mission to build a better life.`,
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

