import { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: 'React Js là gì?'
  },
  {
    id: 2,
    name: 'SPA/MPA là gì ?'
  },
  {
    id: 3,
    name: 'Arrow function'
  },

];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {

    const handlComment = ({detail}) => {
      console.log(detail);
    }

    window.addEventListener('lesson-' + lessonId, handlComment);

    return () => {
      window.removeEventListener('lesson-' + lessonId, handlComment);
    };
  }, [lessonId])

  return (
    <div>
      <ul>
        {
          lessons.map(lesson => {
            return <li
              key={lesson.id}
              style={
                {
                  color: lessonId == lesson.id ? 'red' : '#333'
                }
              }
              onClick={() => setLessonId(lesson.id)}
            >
              {lesson.name}
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default Content;


// ############ File upload image
// function Content() {
//   const [avatar, setAvatar] = useState();

//   useEffect(() => {

//     return () => {
//       avatar && URL.revokeObjectURL(avatar.preview);
//     }

//   }, [avatar]);

//   const handlePreviewAvarta = (e) => {
//     const file = e.target.files[0];
    

//     file.preview = URL.createObjectURL(file);

//     setAvatar(file);

//   };

  


//   return (
//     <div>
//       <input type="file" onChange={handlePreviewAvarta} />

//       {
//         avatar && <img src={avatar.preview} alt="" width='80%' />
//       }
//     </div>
//   );
// }

// ######################
// function Content() {
//   const [countdown, setCountdown] = useState(180);


//   useEffect(() => {
//     setInterval(() => {
//       setCountdown(countdown - 1);
//     }, 1000)
//   }, []);

  


//   return (
//     <div>
//       <h1>{  countdown }</h1>
//     </div>
//   );
// }


// #######################
// const tabs = ["posts", "comments", "albums"];
// function Content() {
//   // useEffect(callback, [deps])

//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState(tabs[0]);

//   // useEffect(() => {
//   //   console.log("Mounted");
//   //   document.title = title;
//   // });
//   // useEffect(() => {
//   //   fetch("https://jsonplaceholder.typicode.com/posts")
//   //     .then((res) => res.json())
//   //     .then((posts) => {
//   //       setPosts(posts);
//   //     });
//   // }, []);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/" + type)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   return (
//     <div>
//       <h1>Hello ae F88888</h1>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       {tabs.map((tab) => {
//         return (
//           <button
//             onClick={() => setType(tab)}
//             style={
//               type === tab ? { color: "#FFF", backgroundColor: "#333" } : {}
//             }
//             key={tab}
//           >
//             {tab}
//           </button>
//         );
//       })}

//       <ul>
//         {posts.map((post) => {
//           return <li key={post.id}>{post.title || post.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }