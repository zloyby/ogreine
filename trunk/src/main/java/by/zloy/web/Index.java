package by.zloy.web;

import org.apache.click.Page;

import java.util.Date;

/**
 * @author EugenKozlov
 */
public class Index extends Page {

    @SuppressWarnings( { "FieldCanBeLocal" })
    private Date time = new Date();

    public Index() {
        addModel("time", time);
    }
}
