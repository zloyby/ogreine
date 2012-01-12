package by.zloy.web;

import org.apache.click.Page;

/**
 * This is base template for site
 *
 * @author EugenKozlov
 */
public class BasePage extends Page{

//    protected Logger log;
//
//    public Logger getLogger() {
//        if (log == null) {
//            log = Logger.getLogger(this.getClass());
//        }
//        return log;
//    }

    @Override
    public String getTemplate() {
        return "/base.htm";
    }
}
