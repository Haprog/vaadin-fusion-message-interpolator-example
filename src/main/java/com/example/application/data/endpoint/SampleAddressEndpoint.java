package com.example.application.data.endpoint;

import com.example.application.data.entity.SampleAddress;
import com.example.application.data.service.SampleAddressService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.fusion.Endpoint;
import com.vaadin.fusion.Nonnull;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.vaadin.artur.helpers.GridSorter;
import org.vaadin.artur.helpers.PagingUtil;

@Endpoint
@AnonymousAllowed
public class SampleAddressEndpoint {

    private SampleAddressService service;

    public SampleAddressEndpoint(@Autowired SampleAddressService service) {
        this.service = service;
    }

    @Nonnull
    public List<@Nonnull SampleAddress> list(int offset, int limit, @Nonnull List<@Nonnull GridSorter> sortOrder) {
        Page<SampleAddress> page = service
                .list(PagingUtil.offsetLimitTypeScriptSortOrdersToPageable(offset, limit, sortOrder));
        return page.getContent();
    }

    public Optional<SampleAddress> get(@Nonnull Integer id) {
        return service.get(id);
    }

    @Nonnull
    public SampleAddress update(@Nonnull SampleAddress entity) {
        return service.update(entity);
    }

    public void delete(@Nonnull Integer id) {
        service.delete(id);
    }

    public int count() {
        return service.count();
    }

}
