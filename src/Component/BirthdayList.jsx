import React, { useState } from "react";

const Birthday = [
  {
    ImageUrl: "https://www.course-api.com/images/people/person-1.jpeg",
    name: "Bertie Yates",
    age: "2 Years",
  },
  {
    ImageUrl: "https://www.course-api.com/images/people/person-2.jpeg",
    name: "Hester Hogan",
    age: " Years",
  },
  {
    ImageUrl: "https://www.course-api.com/images/people/person-5.jpeg",
    name: "Lola Gardner",
    age: "29 Years",
  },
  {
    ImageUrl: "https://www.course-api.com/images/people/person-3.jpeg",
    name: "Larry Little",
    age: "36 Years",
  },
  {
    ImageUrl: "https://www.course-api.com/images/people/person-4.jpeg",
    name: "Sean Walsh",
    age: "34 Years",
  },
];

// function handleEmptyorNot{
//     if(list([]))
//         {

//         }

// }

function BirthdayList() {
  const [list, setList] = useState(Birthday);
  return (
    <div className="onebirthday">
      <h2>{list.length} Birthdays Today</h2>
      <section>
        {list.map((f, i) => {
          const { ImageUrl, name, age } = f;
          return (
            <article key={i} className="Innerbirthday">
              <img src={ImageUrl}></img>
              <div>
                <h3>{name}</h3>
                <h5>{age}</h5>
              </div>
            </article>
          );
        })}
        <button
          className="button"
          onClick={() => {
            if (list.length === 0) {
              setList(Birthday);
            } else {
              setList([]);
            }
          }}
          //   onClick={() => {
          //     setList([]);
          //   }}
        >
          Check Birthdays/Clear All
        </button>
      </section>
    </div>
  );
}

export default BirthdayList;
