import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';



const Paragraph = () => {

    const context = useContext(ThemeContext);

    console.log(context);

    return (
        <p style={{}} className={context.theme}>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, blanditiis! Voluptates est impedit distinctio mollitia, quis, velit sunt nihil dignissimos repudiandae veritatis aperiam ducimus fugiat non, natus architecto dolores ut! 
        </p>
    );
};

export default Paragraph;