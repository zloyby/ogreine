package by.zloy.web;

import java.util.Date;

/**
 * @author EugenKozlov
 */
public class IndexPage extends BasePage {

    public String title = this.getMessage("index.title");

    public IndexPage() {
        addModel("time", new Date());
    }
}
