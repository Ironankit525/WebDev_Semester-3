import { useEffect, useState } from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import './App.css'

const App = () => {
  // const getAuthPath = () => (
  //   window.location.pathname === '/signin' ? '/signin' : '/signup'
  // )
  // const [path, setPath] = useState(getAuthPath)

  // useEffect(() => {
  //   if (window.location.pathname !== path) {
  //     window.history.replaceState({}, '', path)
  //   }

  //   const handlePopState = () => setPath(getAuthPath())
  //   window.addEventListener('popstate', handlePopState)

  //   return () => window.removeEventListener('popstate', handlePopState)
  // }, [path])

  // const navigate = (nextPath) => {
  //   window.history.pushState({}, '', nextPath)
  //   setPath(nextPath)
  // }

  // return (
  //   <main className="auth-page">
  //     {path === '/signup' ? (
  //       <Signup onSignin={() => navigate('/signin')} />
  //     ) : (
  //       <Signin onSignup={() => navigate('/signup')} />
  //     )}
  //   </main>
  // )


const { linksFromJSON } = require('@openrouter/sdk/models')
const express = require('express')
const app = express()
const data = [
    {
        id: 1,
        name: "Eshanth",
        age: 18,
        course: "cse"
    },
    {
        id: 2,
        name: "x",
        age: 8,
        course: "ece"
    },
    {
        id: 3,
        name: "y",
        age: 19,
        course: "mech"
    },
    {
        id: 4,
        name: "aditya",
        age: 88,
        course: "civil"
    },
    {
        id: 5,
        name: "arjun",
        age: 17,
        course: "aiml"
    },
]

app.get('/students', (req, res) => {
    const result = data.map((a, b) => {
        return {
            id: a.id,
            name: a.name,
            age: a.age,
            course: a.course
        }
    })

    res.json(result)
})
app.get('/students/:id', (req, res) => {
    const id = req.params.id
    const student = data.find((a) => {
       return  a.id == id
    })
res.json(student)
})


app.get('student/?course=cse',(req,res)=>{
    const courseName = req.query.course;
    res.send(`Fetching students for course: ${courseName}`);

    
})

app.listen(3000, () => {
    console.log("server running at 3000");

})
}

export default App
