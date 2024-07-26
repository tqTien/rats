import { modalSttState } from 'recoil/modalStt';
import {ConfModal} from 'components/organisms/modal/conf';
import {useRecoilValue,useSetRecoilState} from 'recoil';

export function useModal(title: string, msg: string) {
  const setModalStt = useSetRecoilState(modalSttState);
  setModalStt({isShow: true});
  return ConfModal({
    title: title,
    msg: msg
  });
}