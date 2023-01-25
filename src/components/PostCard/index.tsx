import Image from 'next/image';
import { AiFillClockCircle } from 'react-icons/ai';
import { dateFormatter } from '../../utils/formatter';

interface PostCardProps {
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  tags: string[];
}
export function PostCard({ title, excerpt, thumbnail, date, tags }: PostCardProps) {
  return (
    <div className="w-full">
      <div
        className="w-full h-60 overflow-hidden"
        style={{
          borderRadius: '20px 20px 124.5px 0px',
        }}
      >
        <Image className="w-full h-full object-cover" src={thumbnail} alt="Imagem do post" width={400} height={400} />
      </div>
      <div className="p-5">
        <span>
          <AiFillClockCircle size={18} />
          {dateFormatter.format(new Date(date))}
        </span>
      </div>
    </div>
  );
}
