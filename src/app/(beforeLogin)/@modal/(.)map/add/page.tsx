import onSubmit from '@/app/(beforeLogin)/@modal/(.)map/add/_lib/addCourt';
import FormStateModal from '@/app/(beforeLogin)/_component/FormStateModal';

export default function Page() {
  return <FormStateModal title="농구장 제보하기" onSubmit={onSubmit} />;
}
