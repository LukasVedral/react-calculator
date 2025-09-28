
type DisplayNumberProps = {
    display: string
}
  
const DisplayNumber: React.FC<DisplayNumberProps> = ({display}) => {
  /*display = eval(display);*/

return (
    <div>
        {display}
    </div>
    )
}
  
export default DisplayNumber
  