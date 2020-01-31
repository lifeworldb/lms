import style from 'styled-components'
import Avatar from '@atlaskit/avatar'
import Button from '@atlaskit/button'
import TextField from '@atlaskit/textfield'
import Form, { Field, FormFooter } from '@atlaskit/form'
import Comment, { CommentAuthor, CommentTime, CommentLayout } from '@atlaskit/comment'

const Wrapper = style.div`
    padding-top: 20px;
`

const WrapperMessage = style.div`
    height: 500px;
    overflow-y: scroll;
    border: 1px solid #ddd;
    
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        display: none;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hove {
        background: $b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    
    &::-webkit-scrollbar-thumb:active {
        background-color: #999999;
    }
    
    &::-webkit-scrollbar-track {
        background: #e1e1e1;
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-track:hover,
    &::-webkit-scrollbar-track:active {
      background: #d4d4d4;
    }
`

const WrapperContent = style.div`
    font-size: 13px;
`

const InputMesage = ({ onDataSubmit }) => (
    <Form
        onSubmit={ data => onDataSubmit(data) }
    >
        {({ formProps }) => (
            <form { ...formProps } name='text-message' >
                <Field name='message' defaultValue='' isRequired>
                    {({ fieldProps }) =>
                        <TextField
                            { ...fieldProps }
                            placeholder='Say!'
                            elemBeforeInput={
                                <Avatar src={ 'https://api.adorable.io/avatars/80/chaki@me.com.png' } label='avatar-message' size='small' />
                            }
                        />}
                </Field>

                <FormFooter>
                    <Button type='submit' appearance='primary' >
                        Enviar
                    </Button>
                </FormFooter>
            </form>
        )}
    </Form>
)

const dataReceivedHandler = (data) => {
    console.log(`Data from Form: ${ data }`)
}

const ChatTab = () => (
    <Wrapper>
        <WrapperMessage>
            <Comment
                avatar={ <Avatar src={ 'https://api.adorable.io/avatars/80/chaki@me.com.png' } label='avatar-message' size='small' /> }
                author={ <CommentAuthor>John Smith</CommentAuthor> }
                type='Instructor'
                // time={ <CommentTime>30 August, 2019</CommentTime> }
                content={
                    <WrapperContent>
                        <p>
                            Content goes here. this can include <a>links</a> and other content.
                        </p>
                    </WrapperContent>
                }
            />
            <Comment
                avatar={ <Avatar src={ 'https://api.adorable.io/avatars/80/chaki@me.com.png' } label='avatar-message' size='small' /> }
                author={ <CommentAuthor>John Smith</CommentAuthor> }
                type='Instructor'
                // time={ <CommentTime>30 August, 2019</CommentTime> }
                content={
                    <WrapperContent>
                        <p>
                            Content goes here. this can include <a>links</a> and other content.
                        </p>
                    </WrapperContent>
                }
            />
            <Comment
                avatar={ <Avatar src={ 'https://api.adorable.io/avatars/80/chaki@me.com.png' } label='avatar-message' size='small' /> }
                author={ <CommentAuthor>John Smith</CommentAuthor> }
                type='Instructor'
                // time={ <CommentTime>30 August, 2019</CommentTime> }
                content={
                    <WrapperContent>
                        <p>
                            Content goes here. this can include <a>links</a> and other content.
                        </p>
                    </WrapperContent>
                }
            />
            <Comment
                avatar={ <Avatar src={ 'https://api.adorable.io/avatars/80/chaki@me.com.png' } label='avatar-message' size='small' /> }
                author={ <CommentAuthor>John Smith</CommentAuthor> }
                type='Instructor'
                // time={ <CommentTime>30 August, 2019</CommentTime> }
                content={
                    <WrapperContent>
                        <p>
                            Content goes here. this can include <a>links</a> and other content.
                        </p>
                    </WrapperContent>
                }
            />
            <Comment
                avatar={ <Avatar src={ 'https://api.adorable.io/avatars/80/chaki@me.com.png' } label='avatar-message' size='small' /> }
                author={ <CommentAuthor>John Smith</CommentAuthor> }
                type='Instructor'
                // time={ <CommentTime>30 August, 2019</CommentTime> }
                content={
                    <WrapperContent>
                        <p>
                            Content goes here. this can include <a>links</a> and other content.
                        </p>
                    </WrapperContent>
                }
            />
        </WrapperMessage>
        <InputMesage onDataSubmit={ dataReceivedHandler } />
    </Wrapper>
)

export default ChatTab