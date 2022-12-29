import React, { useRef, useState,useContext } from 'react';
import { Form } from 'react-bootstrap';
import '../css/ProfileUpdateModal.css'
import DataContext from '../data/DataContext';

const ProfileUpdateModal = (props) => {
    const {state, action} = useContext(DataContext)
	const [file, setFile] = useState("");
	const imgShow = useRef();

    const onLoadFile = (e) => {
		// 이벤트객체의 타겟의 files를 통해서 원하는 파일을 가져올 수 있다
		setFile(e.target.files[0])
		imgShow.current.style.backgroundSize = "cover"
		imgShow.current.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`
	}

	// 저장을 눌렀을때 state에 사진을 저장하고 모달창을 종료
	const updateProfile = () => {
		action.setUserpro(
			URL.createObjectURL(file)
		)
        props.setShow(false)
	}

    return ( 
        <div>
            <div className="layer_bg">
                <div className="layer_profile">
					<div ref={imgShow} style={{width:"200px", height :"200px", backgroundColor:"lightgray", margin:"50px 60px" }}></div>
                    <Form.Group controlId="formFile" className="mt-5">
						<div className='label_box'>
                        <Form.Label>추가할 이미지를 선택하세요</Form.Label>
                        </div>
                        
						<Form.Control type="file" onChange={onLoadFile}/>
					</Form.Group>
                    <div className='profile_save' onClick={updateProfile}>
                        저장
                    </div> 
                <div className='profile_close' onClick={()=>{props.setShow(false)}}>닫기</div>  
                </div>
            </div>
        </div>
    );
}

export default ProfileUpdateModal;