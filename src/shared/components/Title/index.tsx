
interface TitleProps {
  title: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title = ({title,type}:TitleProps) => {

  return (
    <div className="meraki-title">
      {
        type === 'h1'?
        <h1>{title}</h1>
        :type === 'h2'?
        <h2>{title}</h2>
        :type === 'h3'?
        <h3>{title}</h3>
        :type === 'h4'?
        <h4>{title}</h4>
        :type === 'h5'?
        <h5>{title}</h5>
        :type === 'h6'?
        <h6>{title}</h6>
        :<h1>{title}</h1>
      }
    </div>
    
  );
}

export default Title;