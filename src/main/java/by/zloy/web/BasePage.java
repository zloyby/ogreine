package by.zloy.web;

import org.apache.click.Page;

/**
 * This is base template for site
 *
 * @author EugenKozlov
 */
public class BasePage extends Page{

    @Override
    public String getTemplate() {
        return "/base.htm";
    }
}
