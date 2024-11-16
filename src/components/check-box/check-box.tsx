export type Props = {
  prefName: string;
};

export default function CheckBox(props: Props) {
  return (
    <div>
      <input type="checkbox" />
      <h2>{props.prefName}</h2>
    </div>
  );
}
