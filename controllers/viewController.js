const PATH = '/dishly'

const viewController = {
    index(req,res,next){
        res.render('dishly/Index', res.locals.data)
    },
    show(req,res,next){
        res.render('dishly/Show', res.locals.data)
    },
    edit(req,res,next){
        res.remder('dishly/edit', res.locals.data)
    },
    
}