import FeedbackBig from '@/../public/svg/feedbackBig.svg';
import SuccessModal from '@/app/(beforeLogin)/_component/SuccessModal';

export default function Page() {
  return <SuccessModal title="피드백이 전달되었습니다!" content="소중한 의견 감사합니다." icon={FeedbackBig} />;
}
