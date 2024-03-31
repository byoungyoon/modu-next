import SuccessModal from '@/app/(beforeLogin)/_component/SuccessModal';
import Save from '@/../public/svg/save.svg';

export default function Page() {
  return <SuccessModal title="저장이 완료되었습니다." content="지도로 이동합니다." icon={Save} />;
}
