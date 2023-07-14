import React from 'react';
import { Github } from 'react-bootstrap-icons';
const NotFoundPage = () => {
  return (
    <div style={{ fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
     height: '100vh',
     textAlign: 'center',
     display: 'flex',
     flexDirection: 'column', 
     alignItems: 'center', 
     justifyContent: 'center',
     backgroundColor: "white",
     color: "black"
     }}>
      <div style={{ 
      lineHeight: '48px',
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
       }}>
        <style>{`
          body {
            color: #000;
            background: #fff;
            margin: 0;
          }

          .next-error-h1 {
            border-right: 1px solid rgba(0, 0, 0, 0.3);
          }

          @media (prefers-color-scheme: dark) {
            body {
              color: #fff;
              background: #000;
            }

            .next-error-h1 {
              border-right: 1px solid rgba(255, 255, 255, 0.3);
            }
          }
        `}</style>
        <Github className="next-error-h1" 
        style={{ 
        display: 'inline-block', 
        margin: '0 20px 0 0', 
        paddingRight: '23px', 
        fontSize: '3rem', 
        fontWeight: '500', 
        verticalAlign: 'top' }}>
        </Github>
        <div style={{ display: 'inline-block' }}>
          <h2 style={{ 
            fontSize: '2em', 
            fontWeight: '400', 
            lineHeight: '28px' }}>
            Sorry, The code for this site Cannot Be Provided
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
