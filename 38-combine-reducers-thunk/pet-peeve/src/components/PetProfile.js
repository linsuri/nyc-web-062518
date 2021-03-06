import React from 'react';
import { connect } from 'react-redux';
// import { adoptPetAction, likePetAction } from '../actions';
import * as actions from  '../actions';

const PetProfile = (props) => {
  const { name, age, species, gb } = props.pet;

  // const adoptPet = () => {
  //   props.dispatch({
  //     type: 'REMOVE_PET',
  //     payload: props.pet,
  //   })
  // }
  //
  // const likePet = () => {
  //   props.dispatch({
  //     type: 'LIKE_PET',
  //     payload: props.pet,
  //   })
  // }

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{species}</h3>
      <h4>{gb.toString()}</h4>
      <button onClick={() => props.adoptPet(props.pet)}>Adopt</button>
      <button onClick={() => props.likePet(props.pet)}>Like</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pet: state.currentPet,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     adoptPet: (pet) => dispatch(adoptPetAction(pet)),
//     likePet: (pet) => dispatch(likePetAction(pet)),
//   }
// }

export default connect(mapStateToProps, actions)(PetProfile);
