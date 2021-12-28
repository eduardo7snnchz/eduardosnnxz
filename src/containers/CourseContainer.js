import React, {useEffect,useState} from 'react';
import Course from '../pages/Course';
import Request from '../async/request';

const CourseContainer = () =>{
    const [courses, setCourses]=useState ([]);

    useEffect(
        () =>{
        },[]
    );    
     async function get(){
        const request = new Request("GET", null, 1, "control/curso");
        const response = await request.exec();
        console.log(response);
        setCourses(response.item);
       
    }
                
    get();
    
        return (
        <Course
        courses= { courses }
        get={get}
        
        />
    )

};

export default CourseContainer;