package by.zloy.web;

import java.util.Date;

/**
 * @author EugenKozlov
 */
public class IndexPage extends BasePage {

    public String title = this.getMessage("index.title");

/*
    private MessageRepository messageRepository = new MessageRepository();
*/

    public IndexPage() {
        addModel("time", new Date());
    }

/*
    protected void createMessage() {
        Message message = new Message();
        message.setText(new Date().toString());
        messageRepository.create(message);
    }

    protected void deleteMessage(Long id) {
        messageRepository.deleteById(id);
    }
*/
}
