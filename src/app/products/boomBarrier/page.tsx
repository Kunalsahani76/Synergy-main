import { permanentRedirect } from 'next/navigation';

export default function LegacyBoomBarrierPage() {
  permanentRedirect('/products/boom-barrier');
}
