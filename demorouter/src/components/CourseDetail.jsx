import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const cources = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "Javahihi",
    },
    {
      id: 3,
      name: "React",
    },
    {
      id: 4,
      name: "Java",
    },
    {
      id: 5,
      name: "Hihi5",
    },
  ];

export default function CourseDetail() {
    const {id} = useParams();
    const [courseDetail, setCourseDetail] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(()=>{
        const findCource = cources.find((cource) => cource.id ===parseInt(id));

        if(findCource){
            setCourseDetail(findCource);
        }else{
            setIsNotFound(true);
        }
    },[]);
    return (
    <div>
        <h3>CourseDetail</h3>
        {isNotFound? (
            <h3>Ko tim thay kqua</h3>
        ): (
            <div>
                {/* optional chain */}
                <p>Id: {courseDetail?.id}</p>
                <p>Name: {courseDetail?.name}</p>
            </div>
        )}
    </div>
  )
}
