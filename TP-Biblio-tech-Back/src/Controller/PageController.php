<?php

namespace App\Controller;

use App\Entity\Page;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    /**
     * @Route("/pages/{id}", name="app_page_show", methods={"GET"})
     */
    public function show(Page $page): Response
    {
        return $this->json($page, Response::HTTP_OK);
    }
}
