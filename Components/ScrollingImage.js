// import React from 'react';

// const ScrollingImage = ({ imageUrl }) => {
  //   return (
    //     <div className={styles.container}>
    //       <div className={styles.your_frame}>
    //         <div className={styles['background-image']} style={{ backgroundImage: `url(${imageUrl})`,
    //       background: "cover"}}></div>
//       </div>
//     </div>
//   );
// };

// export default ScrollingImage;

import React from 'react'
import styles from '../styles/ScrollImage.module.css';
import Image from 'next/image';

 function ScrollingImage ({imageUrl, stylesIsRequired}) {
  // let stylesIsRequired = false
  let imageStyles;
  let screenStyle;
  let style={
    image: {

    }
  }
  if(stylesIsRequired == true){
    imageStyles = `${styles.Scrollingimg}`
    screenStyle = `${styles.screen}`
  }else{
    style={
      image:{
        width: "100%",
        maxHeight: "350px",
        borderRadius: "10px"
      }
    }
  }
  return (
    <div className={`${styles.container} `}>
			<div className={`${styles.row}`}>
	        	<div className={`col-md-12 p-2
             ${styles.content}`}>
					<div className={screenStyle}
          style={{
            width: "300px",
            maxHeight: "350px",
            borderRadius: "10px",
            margin: "0 auto"
          }}
          >
						<img className={imageStyles} style={style.image}
            src={imageUrl}
            />
					</div>
	        	</div>
			</div>
		</div>
  )
}
export default ScrollingImage;

