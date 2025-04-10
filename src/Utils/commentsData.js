const commentsData = [
  {
    name: "Ashish Raj",
    text: "This article is very insightful. Learned a lot from it!",
    replay: [
      {
        name: "John Doe",
        text: "I agree! The examples were especially helpful.",
        replay: [
          {
            name: "Jane Smith",
            text: "Same here! It made a complex topic much easier to understand.",
            replay: [
              {
                name: "Emily Johnson",
                text: "Exactly! The step-by-step explanation was on point.",
                replay: [
                  {
                    name: "Michael Brown",
                    text: "Yes, and the code snippets were well-explained too!",
                    replay: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Sophia Wilson",
            text: "I wish all technical content was this well-structured.",
            replay: [],
          },
        ],
      },
      {
        name: "Michael Brown",
        text: "I found the async/await part particularly useful.",
        replay: [
          {
            name: "Ashish Raj",
            text: "Totally! Understanding async/await makes handling promises much simpler.",
            replay: [
              {
                name: "Jane Smith",
                text: "Agreed! I used to struggle with it before.",
                replay: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sophia Wilson",
    text: "This is one of the best explanations I've come across!",
    replay: [
      {
        name: "John Doe",
        text: "Absolutely! It sets a high bar for technical writing.",
        replay: [],
      },
    ],
  },
  {
    name: "Michael Brown",
    text: "I have a question about the second example. Can someone clarify?",
    replay: [
      {
        name: "Emily Johnson",
        text: "Sure! The second example demonstrates how to handle async operations using promises.",
        replay: [
          {
            name: "Michael Brown",
            text: "Ah, I see! The chaining part was confusing. Thanks for explaining!",
            replay: [],
          },
          {
            name: "Jane Smith",
            text: "Yeah, promise chaining can be tricky at first, but once you get it, it’s super powerful.",
            replay: [],
          },
        ],
      },
    ],
  },
  {
    name: "Emily Johnson",
    text: "Does anyone know if this approach works with TypeScript?",
    replay: [
      {
        name: "Ashish Raj",
        text: "Yes, it does! TypeScript actually makes async/await even cleaner.",
        replay: [
          {
            name: "John Doe",
            text: "Good to know! I might try it in my next project.",
            replay: [],
          },
        ],
      },
    ],
  },
  {
    name: "Jane Smith",
    text: "I love how everyone is contributing to this discussion. Great insights all around!",
    replay: [
      {
        name: "Sophia Wilson",
        text: "Absolutely! A healthy exchange of ideas makes us all better developers.",
        replay: [],
      },
    ],
  },
];

export default commentsData;
