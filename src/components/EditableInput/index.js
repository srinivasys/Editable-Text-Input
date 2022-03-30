import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  Paragraph,
  Input,
  Button,
} from './StyledComponents'

class EditableInput extends Component {
  state = {editMode: false, input: ''}

  onChangeValue = event => {
    this.setState({input: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevState => ({editMode: !prevState.editMode}))
  }

  render() {
    const {editMode, input} = this.state
    const buttonText = editMode ? 'edit' : 'save'

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          {editMode ? (
            <Paragraph>{input}</Paragraph>
          ) : (
            <Input type="text" value={input} onChange={this.onChangeValue} />
          )}
          <Button type="button" onClick={this.onClickBtn}>
            {buttonText}
          </Button>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default EditableInput
