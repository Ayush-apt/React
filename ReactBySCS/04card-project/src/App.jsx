import React from 'react'
import Card from './components/Card'
// import User from './components/User'

const App = () => {

  const jobs = [
    {
      id: 1,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
      company: "Amazon",
      daysAgo: 5,
      role: "Senior UI/UX Designer",
      jobTypes: ["Part-Time", "Senior Level"],
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      company: "Google",
      daysAgo: 30,
      role: "Graphic Designer",
      jobTypes: ["Part-Time", "Flexible Schedule"],
      salary: "$150–220k",
      location: "Kochi, India",
    },
    {
      id: 3,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-I-2ihv_zWIQVGL5zPSH5wNfvXSHxNZLRXh6lPBCZBy_Ivk_HxLPCDw&s=10https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg",
      company: "Dribbble",
      daysAgo: 18,
      role: "Senior Motion Designer",
      jobTypes: ["Contract", "Remote"],
      salary: "$85/hr",
      location: "Chennai, India",
    },
    {
      id: 4,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHWutx0iEFMXWBP9cn--GA7hNPpAuj6GgZ_T3Sux4ITpDF2nztnw3DD-K&s=10",
      company: "Figma",
      daysAgo: 5,
      role: "UX Designer",
      jobTypes: ["Full-Time", "In Office"],
      salary: "$200–250k",
      location: "Bangalore, India",
    },
    {
      id: 5,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6GCk5wcmJslbQm4aLeP-IQORcZl_G2SbjZksD7yGTqWLH7tS_FHdBgU&s=10",
      company: "Airbnb",
      daysAgo: 5,
      role: "Junior UI/UX Designer",
      jobTypes: ["Contract", "Remote"],
      salary: "$100/hr",
      location: "Delhi, India",
    },
    {
      id: 6,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrRUjtu-Eq85yZmbVWSBrZ6HcOxOcJ6f9ayMD_dXNg1KyN1U7wXBGrYlu&s=10",
      company: "Apple",
      daysAgo: 5,
      role: "Graphic Designer",
      jobTypes: ["Full-Time", "Flexible Schedule"],
      salary: "$85–120k",
      location: "Kerala, India",
    },
    {
      id: 7,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
      company: "Microsoft",
      daysAgo: 2,
      role: "Frontend Developer",
      jobTypes: ["Full-Time", "Remote"],
      salary: "$140–180k",
      location: "Hyderabad, India",
    },
    {
      id: 8,
      logo: "https://images.seeklogo.com/logo-png/44/1/nvidia-logo-png_seeklogo-443363.png",
      company: "Nvidia",
      daysAgo: 8,
      role: "Product Designer",
      jobTypes: ["Full-Time", "Hybrid"],
      salary: "$110–160k",
      location: "Noida, India",
    },
    {
      id: 9,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WGODC5B4QVuCpxR9RqKNed1zW-YSEEzheg2OCZymITMV2gsL5JQl40Jo&s=10",
      company: "Adobe",
      daysAgo: 12,
      role: "UI Designer",
      jobTypes: ["Contract", "Remote"],
      salary: "$95/hr",
      location: "Pune, India",
    },
    {
      id: 10,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4ZFsQZqoTJLEEUpiGAfSU3L71ulPUIiXPKPFsu4LXqHevWTGbmV9aQw&s=10",
      company: "Meta",
      daysAgo: 1,
      role: "Product Designer",
      jobTypes: ["Full-Time", "Senior Level"],
      salary: "$180–250k",
      location: "Gurugram, India",
    },
  ];


  return (
    <div className='parent'>
      {jobs.map( (elem) => {
        return(
          <Card
           logo={elem.logo}
           company={elem.company}
           daysAgo={elem.daysAgo}
           role={elem.role}
           jobTypes={elem.jobTypes}
           salary={elem.salary}
           location={elem.location}
          />
        );
      })}
    </div>
  )
}

export default App
