﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EvolveCTE.DataRepository;
using Microsoft.Practices.Unity.Mvc;
using Microsoft.Practices.Unity;

namespace EVOLVECTE
{
    public class BootStrapper
    {
        public static void Initialise()
        {
            var container = BuildUnityContainer();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }

        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();            
            RegisterTypes(container);
            return container;
        }

        public static void RegisterTypes(IUnityContainer container)
        {
            container.RegisterType<ILoginRepository, DataRepository.LoginRepository>();
            //container.RegisterType<IHomeRepository, DataRepository.HomeRepository>();
        }
    }
}