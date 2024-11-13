import { useEffect, useRef } from 'react';

const TitleImage = () => {

    const titleImgRef = useRef(null);

    useEffect(() => {
        if (!titleImgRef.current) {
            const link = document.createElement('link');
            link.rel = 'icon';
            link.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kwLPpv_WtZ_q0MnKhUsvNwNCSwLIpVDxrVyXQC5ecGwQHXvnai3l8kGl1hiIG7BXHZ4&usqp=CAU';
            document.head.appendChild(link);
            titleImgRef.current = link;
        } else {
            titleImgRef.current.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kwLPpv_WtZ_q0MnKhUsvNwNCSwLIpVDxrVyXQC5ecGwQHXvnai3l8kGl1hiIG7BXHZ4&usqp=CAU';
        }
    }, []);

}

export default TitleImage
