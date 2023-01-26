import UserProfiles from "./components/UserProfiles";

const profiles = [
  {
    username: "alakeman0",
    name: "Alake Man",
    avatarUrl: "http://dummyimage.com/245x115.png/ff4444/ffffff",
    profileUrl:
      "https://cisco.com/elementum/in/hac/habitasse/platea.html?nulla=viverra&eget=pede&eros=ac&elementum=diam&pellentesque=cras&quisque=pellentesque&porta=volutpat&volutpat=dui&erat=maecenas&quisque=tristique&erat=est&eros=et&viverra=tempus&eget=semper&congue=est&eget=quam&semper=pharetra&rutrum=magna&nulla=ac&nunc=consequat&purus=metus&phasellus=sapien&in=ut&felis=nunc&donec=vestibulum&semper=ante&sapien=ipsum&a=primis&libero=in&nam=faucibus&dui=orci&proin=luctus&leo=et&odio=ultrices&porttitor=posuere&id=cubilia&consequat=curae&in=mauris&consequat=viverra&ut=diam&nulla=vitae&sed=quam&accumsan=suspendisse&felis=potenti&ut=nullam&at=porttitor&dolor=lacus&quis=at&odio=turpis&consequat=donec&varius=posuere&integer=metus&ac=vitae&leo=ipsum&pellentesque=aliquam&ultrices=non&mattis=mauris&odio=morbi&donec=non&vitae=lectus&nisi=aliquam&nam=sit&ultrices=amet&libero=diam&non=in&mattis=magna&pulvinar=bibendum&nulla=imperdiet&pede=nullam&ullamcorper=orci&augue=pede&a=venenatis&suscipit=non&nulla=sodales&elit=sed&ac=tincidunt&nulla=eu&sed=felis&vel=fusce&enim=posuere&sit=felis&amet=sed&nunc=lacus&viverra=morbi&dapibus=sem&nulla=mauris&suscipit=laoreet&ligula=ut&in=rhoncus&lacus=aliquet&curabitur=pulvinar&at=sed&ipsum=nisl&ac=nunc&tellus=rhoncus&semper=dui&interdum=vel&mauris=sem",
    bio: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    username: "bickov1",
    name: "George Bickov",
    avatarUrl: "http://dummyimage.com/233x134.png/5fa2dd/ffffff",
    profileUrl:
      "http://cam.ac.uk/posuere/cubilia/curae/mauris/viverra.html?velit=imperdiet&nec=nullam&nisi=orci&vulputate=pede&nonummy=venenatis&maecenas=non&tincidunt=sodales&lacus=sed&at=tincidunt&velit=eu&vivamus=felis&vel=fusce&nulla=posuere&eget=felis&eros=sed&elementum=lacus&pellentesque=morbi&quisque=sem&porta=mauris&volutpat=laoreet&erat=ut&quisque=rhoncus&erat=aliquet&eros=pulvinar&viverra=sed&eget=nisl&congue=nunc&eget=rhoncus&semper=dui&rutrum=vel&nulla=sem&nunc=sed&purus=sagittis&phasellus=nam&in=congue&felis=risus&donec=semper&semper=porta&sapien=volutpat&a=quam&libero=pede&nam=lobortis&dui=ligula&proin=sit&leo=amet&odio=eleifend&porttitor=pede&id=libero&consequat=quis&in=orci&consequat=nullam&ut=molestie&nulla=nibh&sed=in&accumsan=lectus&felis=pellentesque&ut=at&at=nulla&dolor=suspendisse&quis=potenti&odio=cras&consequat=in&varius=purus&integer=eu&ac=magna&leo=vulputate&pellentesque=luctus&ultrices=cum&mattis=sociis&odio=natoque&donec=penatibus&vitae=et&nisi=magnis&nam=dis&ultrices=parturient&libero=montes&non=nascetur&mattis=ridiculus",
    bio:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    username: "jsiney2",
    name: "Jasmine Siney",
    avatarUrl: "http://dummyimage.com/141x107.png/5fa2dd/ffffff",
    profileUrl:
      "https://theatlantic.com/ultrices/phasellus/id/sapien/in.js?purus=in&phasellus=hac&in=habitasse&felis=platea&donec=dictumst&semper=aliquam&sapien=augue&a=quam&libero=sollicitudin&nam=vitae&dui=consectetuer&proin=eget&leo=rutrum&odio=at&porttitor=lorem&id=integer&consequat=tincidunt&in=ante&consequat=vel&ut=ipsum&nulla=praesent&sed=blandit&accumsan=lacinia&felis=erat&ut=vestibulum&at=sed&dolor=magna&quis=at&odio=nunc&consequat=commodo&varius=placerat&integer=praesent&ac=blandit&leo=nam&pellentesque=nulla&ultrices=integer&mattis=pede&odio=justo&donec=lacinia&vitae=eget&nisi=tincidunt&nam=eget&ultrices=tempus&libero=vel&non=pede&mattis=morbi&pulvinar=porttitor&nulla=lorem&pede=id&ullamcorper=ligula&augue=suspendisse&a=ornare&suscipit=consequat&nulla=lectus&elit=in&ac=est&nulla=risus&sed=auctor&vel=sed&enim=tristique&sit=in&amet=tempus&nunc=sit&viverra=amet&dapibus=sem&nulla=fusce&suscipit=consequat&ligula=nulla&in=nisl&lacus=nunc&curabitur=nisl&at=duis&ipsum=bibendum&ac=felis&tellus=sed&semper=interdum&interdum=venenatis&mauris=turpis&ullamcorper=enim&purus=blandit&sit=mi&amet=in",
    bio:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
];

const App = () => {
  return <UserProfiles profiles={profiles} />;
};

export default App;
