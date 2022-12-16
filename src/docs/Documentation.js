import React from "react";
import './styles/Documentation.css'

function Documentation(){
    return (
        <div className='wrapper'>
            <p style={{textAlign: 'center'}}><span style={{fontSize: '24px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong>Documentation</strong></span></span></p>
            <p style={{textAlign: 'center'}}><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong>Instructions</strong></span></span></p>
            <p>&nbsp;</p>
            <p><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>This is a chat App, where you can sign up and log in. The Navbar component is on all the other pages. </span></span></p>
            <p><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the Home page, you can use the navbar to go to other pages or you can click on the "Get Started" green button to go to the Chat Page. </span></span></p>
            <p><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the chat page, you can see the main idea of this page, which is having Rooms for different topics and who is logged on to the specific room of your choice.</span></span></p>
            <p><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the login page, there are some validations been done. If you are not registered yet, you can click on the "Signup" button and you are going to the Signup page, where you can create a new user giving the Name, Email, and Password. It's not possible to create more than one user using the same email address. Also, the password passes by encryption when it goes to the database, been impossible to see what is the real password. There are two types of Alert messages for the user. If the user was created successfully, will show a message showing that you were successfully registered and the email that was registered. On the other hand, if you try to use the same email to register, will show an Error alert showing that the specific email already exists.</span></span></p>
            <p><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Whenever you are done with the registration, you can go to the Login page and log in with your user. If the password and the email are correct, the request will be done successfully.&nbsp;</span></span></p>
            <p><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the user page, you can request all the users contained in the database and also request users by name, id and email.</span></span></p>
            <p><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the Project-Ideas page, you can add features that would be nice to have on this app.</span></span></p>
            <p>&nbsp;</p>
            <p style={{textAlign: 'center'}}><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong>Features Implemented</strong></span></span></p>
            <ul>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong>Componentize&nbsp;</strong>your react app.</span></span>
                    <ul>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>There are seven components in total: ErrorAlert, Form, IdeaList, MessageForm, Navigation, Sidebar, and Success Alert as well as the pages Chat, Home, Ideas, Login, Signup, Users.</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>The component SuccessAlert and ErrorAlert contain state, as well as the pages Ideas, Login, Signup, and Users.</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Some props were passed, for example from the Signup page to the components ErrorAlert and SuccessAlert to control the state of whenever it is supposed to open the Success alert or the Error alert.</span></span></li>
                    </ul>
                </li>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong>Event handlers implemented for interactivity</strong></span></span>
                    <ul>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>It was implemented the&nbsp;<strong>adding&nbsp;</strong>and&nbsp;<strong>removing</strong>&nbsp;functionalities on the Project-Idea page, where you can add an idea of features and remove all the ideas or remove just a single idea.</span></span></li>
                    </ul>
                </li>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong>Client-side routing</strong></span></span>
                    <ul>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>All the routes were implemented on App.js, having specific routes for each page.</span></span></li>
                    </ul>
                </li>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Implement a <strong>REST API</strong> using Express with the following</span></span>
                    <ul>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the back end, going to the folder routes/api/userRoutes.js, there are <strong>four GET routes</strong> implemented, one gets all the users on the database, one you get by name, another by ID, and the last one by email.</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>There are <strong>two POST routes&nbsp;</strong>implemented, one used on the Signup page to register the user, and the other one on the Login page to see if the email and password are correct.</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Response and status code contains error messages on the console, as well as on the Signup page, having a UI with the Success message or Error message.</span></span></li>
                    </ul>
                </li>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Connect your front-end React app to your Express backend using HTTP requests.</span></span>
                    <ul>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the <strong>Login</strong> page, there is <strong>one POST</strong> request been used.&nbsp;</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the <strong>Signup</strong> page, there is another <strong>POST</strong> request has been used to register the new user.</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the page <strong>Users</strong>, there are all <strong>four GET</strong> requests implemented.</span></span></li>
                    </ul>
                </li>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Use <strong>MongoDB atlas</strong> to persist application data.</span></span>
                    <ul>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>The API is connected properly to the database</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Posted data are validated, for example, It is not possible to use the same email to register more than one time, and when you try to Login, if the email is wrong, there is a message on the console showing that the email is wrong, and the same thing for the password.</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>The password is encrypted using bcrypt library.</span></span></li>
                        <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>On the Users you can get all the users by name, email, and ID, but It doesn't show the password. Even in the database, the password is encrypted.</span></span></li>
                    </ul>
                </li>
            </ul>
            <p style={{textAlign: 'center'}}><span style={{fontSize: '24px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong>Attributions</strong></span></span></p>
            <p style={{textAlign: 'center'}}><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong>Images</strong></span></span></p>
            <p><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>All the pictures were taken from unsplash.</span></span></p>
            <ol>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>&nbsp;Coffee Image used on the Login&nbsp;page:&nbsp;</span></span>
                    <pre><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><a href="https://images.unsplash.com/photo-1629131530694-c2b44f0cd901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">https://images.unsplash.com/photo-1629131530694-c2b44f0cd901?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80</a> or <a href="https://unsplash.com/photos/PfUw6vlPc3M">https://unsplash.com/photos/PfUw6vlPc3M</a></span></span></pre>
                </li>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Friends image used on the Signup page:&nbsp;<a href="https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80</a>&nbsp;or&nbsp;<a href="https://unsplash.com/photos/pumko2FFxY0">https://unsplash.com/photos/pumko2FFxY0</a></span></span></li>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Friends imagee on the Home page:&nbsp;<a href="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80</a>&nbsp;or&nbsp;<a href="https://unsplash.com/photos/98Elr-LIvD8">https://unsplash.com/photos/98Elr-LIvD8</a></span></span></li>
                <li><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Robot on the Sign up page:&nbsp;<a href="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80">https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=810&amp;q=80</a>&nbsp;or&nbsp;<a href="https://unsplash.com/photos/FTfjMijq-Ws">https://unsplash.com/photos/FTfjMijq-Ws</a></span></span></li>
            </ol>
            <p>&nbsp;</p>
            <p style={{textAlign: 'center'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><strong><span style={{fontSize: '18px'}}>Tutorials</span></strong></span></p>
            <ol>
                <li><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><span style={{fontSize: '18px'}}><strong>MongoDB, express and Design inspired by:&nbsp;<a href="https://www.youtube.com/watch?v=qdZYHbg72WQ&t=1390s">https://www.youtube.com/watch?v=qdZYHbg72WQ&amp;t=1390s</a></strong></span></span></li>
                <li><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><span style={{fontSize: '18px'}}><strong>State hook, axios,&nbsp;APIs, add and remove features, and Requests using Axios&nbsp;inspired by the course's material.</strong></span></span></li>
                <li><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><span style={{fontSize: '18px'}}><strong>Grid inspired using React Bootstrap:&nbsp;</strong><a href="https://react-bootstrap.github.io/layout/grid/">https://react-bootstrap.github.io/layout/grid/</a></span></span></li>
            </ol>
            <p>&nbsp;</p>
            <p style={{textAlign: 'center'}}><span style={{fontSize: '24px'}}><strong><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>Packages</span></strong></span></p>
            <p><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><span style={{fontSize: '18px'}}>The packages and versions for the <strong>front end</strong>:</span></span></p>
            <pre><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><span style={{fontSize: '18px'}}>"@reduxjs/toolkit": "^1.9.0",{"\n"}"@testing-library/jest-dom": "^5.16.5",{"\n"}"@testing-library/react": "^13.4.0",{"\n"}"@testing-library/user-event": "^13.5.0",{"\n"}"axios": "^1.2.0",{"\n"}"bootstrap": "^5.2.3",{"\n"}"nanoid": "^4.0.0",{"\n"}"react": "^18.2.0",{"\n"}"react-bootstrap": "^2.6.0",{"\n"}"react-dom": "^18.2.0",{"\n"}"react-redux": "^8.0.5",{"\n"}"react-router-bootstrap": "^0.26.2",{"\n"}"react-router-dom": "^6.4.3",{"\n"}"react-scripts": "5.0.1",{"\n"}"redux": "^4.2.0",{"\n"}"redux-persist": "^6.0.0",{"\n"}"redux-thunk": "^2.4.2",{"\n"}"socket.io-client": "^4.5.4",{"\n"}"web-vitals": "^2.1.4"</span></span></pre>
            <p><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}><span style={{fontSize: '18px'}}>The packages and versions for the <strong>back end</strong>:</span></span></p>
            <pre><span style={{fontSize: '18px'}}><span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>"bcrypt": "^5.1.0",{"\n"}"cors": "^2.8.5",{"\n"}"dotenv": "^16.0.3",{"\n"}"express": "^4.18.2",{"\n"}"mongoose": "^6.7.2",{"\n"}"nodemon": "^2.0.20",{"\n"}"socket.io": "^4.5.3",{"\n"}"uuid": "^9.0.0",{"\n"}"validator": "^13.7.0"</span></span></pre>
            <p>&nbsp;</p>
        </div>

)
}

export default Documentation;