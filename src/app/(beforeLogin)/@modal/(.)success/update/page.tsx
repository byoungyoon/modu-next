import SuccessModal from '@/app/(beforeLogin)/_component/SuccessModal';
import Save from '@/../public/svg/save.svg';

export default function Page() {
  return <SuccessModal title="수정이 완료되었습니다." content="농구장 정보로 이동합니다." icon={Save} />;
}
