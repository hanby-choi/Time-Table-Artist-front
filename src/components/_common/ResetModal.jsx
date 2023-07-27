import { M } from './Modal.style';

import React from 'react';
import { isMobile } from 'react-device-detect';

const ResetModal = ({ setIsResetModalOpen }) => {
    const handleResetClick = () => {
        // 시간표 삭제 api 불러오기
        setIsResetModalOpen(false);
        window.location.reload();
    };
    return (
        <M.Modal className={`${isMobile && 'mobile-background'}`}>
            <div
                className={`red-background modal ${isMobile && 'mobile-modal'}`}
            >
                <p className={`emoji ${isMobile && 'mobile-emoji'}`}>
                    (๑°ㅁ°๑)‼
                </p>
                <p className={`text ${isMobile && 'mobile-text'}`}>
                    정말 초기화할까요?
                </p>
                <div>
                    <button
                        onClick={() => setIsResetModalOpen(false)}
                        className={`btn gray-btn ${isMobile && 'mobile-btn'}`}
                    >
                        취소
                    </button>
                    <button
                        onClick={handleResetClick}
                        className={`btn red-btn ${isMobile && 'mobile-btn'}`}
                    >
                        초기화
                    </button>
                </div>
            </div>
        </M.Modal>
    );
};

export default ResetModal;
