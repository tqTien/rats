import { modalSttState } from 'recoil/modalStt';
import {useRecoilValue,useSetRecoilState} from 'recoil';

type props = {
  id?: string,
  title: string
  msg: string,
  isShow?: boolean
}

export function ConfModal(props: props) {
  const isShow = props.isShow || false;
  const modalStt = useRecoilValue(modalSttState);
  const setModalStt = useSetRecoilState(modalSttState);
  const doYes = () => {
    setModalStt({isShow: false});
  }
  return (
    <>
      <div className={`md-conf ${modalStt.isShow && 'md--show'}`}>
        <div className="md-content">
        <div className="md-title">{props.title}</div>
        <div className="md-text">{props.msg}</div>
        <div className="md-cmd"><button className="md-cmd-btn" onClick={doYes}>Yes</button><button className="md-cmd-btn">No</button></div>
        </div>
      </div>
    </>
  );
}