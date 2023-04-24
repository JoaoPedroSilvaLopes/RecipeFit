import { Exercicio } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id: string;
  setData: React.Dispatch<React.SetStateAction<Exercicio[]>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const loadByCategoria = async ({ id, setData, setIsloading }: Props) => {
  return firestore()
  .collection('exercicio')
  // .onSnapshot((querySnapshot) => {
  //   const data = querySnapshot.docs.filter((doc) => {
  //     console.log(id, doc(''))
  //     return doc.ref.id === id && console.log('teste', doc);
  //     //console.log('teste', doc.ref.id)
  //   }) as unknown as Exercicio[]
  //   // const data = querySnapshot.docs.filter((doc) => {
  //   //   return doc.id === id && { id: doc.id, ...doc.data() };
  //   // }) as unknown as Exercicio[];
  //   setData(data);
  //   setIsloading(false);
  // });

  // .where('nome', '==', `Braço 1`)
  // .get();

  // .orderBy('categoriaId')
  // .startAt(`/categoriaExercicio/${id}`)
  // .get()

  // .onSnapshot((querySnapshot) => {
  //   const data = querySnapshot.docs.filter((doc) => {
  //     return doc.id === id && { id: doc.id, ...doc.data() };
  //   }) as unknown as Exercicio[];
  //   setData(data);
  //   setIsloading(false);
  // });
};
